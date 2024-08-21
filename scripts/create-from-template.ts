import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "fs";
import { join, resolve } from "path";

const templatesDir = resolve(process.cwd(), "templates/");
const templatesComponentDir = join(templatesDir, "/component");

const args = process.argv.slice(2);

function buildTemplate(templateCode: string, placeholders: Record<string, string>) {
  const regex = new RegExp("\\[\\[\\s*(.*?)\\s*\\]\\]", "gm");
  const variable = regex.exec(templateCode)?.[1];

  if (variable && placeholders[variable]) {
    return templateCode.replaceAll(regex, placeholders[variable]);
  }

  return templateCode;
}

function createComponent(componentName: string, outputDir: string) {
  try {
    const templateFiles = readdirSync(templatesComponentDir);
    const outputPath = join(process.cwd(), outputDir, componentName);

    if (existsSync(join(process.cwd(), outputDir))) {
      mkdirSync(outputPath);
    } else {
      throw new Error(`Output directory does not exist for path: '${outputDir}'`);
    }

    templateFiles.forEach((templateFile) => {
      const filePath = join(templatesComponentDir, templateFile);
      const templateCode = String(readFileSync(filePath));
      const compiledTemplateCode = buildTemplate(templateCode, { name: componentName });

      const compiledTemplateFileName = buildTemplate(templateFile, { name: componentName }).replace(
        ".tmp",
        "",
      );
      writeFileSync(join(outputPath, compiledTemplateFileName), compiledTemplateCode);
    });
  } catch (error) {
    throw new Error(`[Create Component]: ${error}`);
  }
}

try {
  const componentName = args[0];
  const outputDir = args[1];

  if (!componentName) {
    throw new Error("Component name is required");
  }

  if (!outputDir) {
    throw new Error("Output directory path is required");
  }

  createComponent(componentName, outputDir);
} catch (error) {
  console.error(error);
}
