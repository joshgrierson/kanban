import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "fs";
import { join, resolve } from "path";

// constants
const TEMPLATES_DIR = resolve(process.cwd(), "templates/");
const TEMPLATES_COMPONENT_DIR = join(TEMPLATES_DIR, "/component");
const TEMPLATES_TOKEN_DIR = join(TEMPLATES_DIR, "/token");

const args = process.argv.slice(2);

function buildTemplate(templateCode: string, placeholders: Record<string, string>) {
  const regex = new RegExp("\\[\\[\\s*(.*?)\\s*\\]\\]", "gm");
  const variable = regex.exec(templateCode)?.[1];

  if (variable && placeholders[variable]) {
    return templateCode.replaceAll(regex, placeholders[variable]);
  }

  return templateCode;
}

function createFromTemplate(
  fileName: string,
  {
    outputDir,
    templatesDir,
    mkdir = true,
  }: { outputDir: string; templatesDir: string; mkdir?: boolean },
) {
  try {
    const templateFiles = readdirSync(templatesDir);
    const outputPath = join(
      ...(() => {
        const paths = [process.cwd(), outputDir];
        if (mkdir) {
          paths.push(fileName);
        }
        return paths;
      })(),
    );

    if (mkdir) {
      if (existsSync(join(process.cwd(), outputDir))) {
        mkdirSync(outputPath);
      } else {
        throw new Error(`Output directory does not exist for path: '${outputDir}'`);
      }
    }

    templateFiles.forEach((templateFile) => {
      const filePath = join(templatesDir, templateFile);
      const templateCode = String(readFileSync(filePath));
      const compiledTemplateCode = buildTemplate(templateCode, { name: fileName });

      const compiledTemplateFileName = buildTemplate(templateFile, { name: fileName }).replace(
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
  const fileName = args[0];
  const outputDir = args[1];
  const typeFlag = args[2]?.startsWith("--type=") ? args[2].split("=")[1] : "component";

  if (!fileName) {
    throw new Error("File name is required");
  }

  if (!outputDir) {
    throw new Error("Output directory path is required");
  }

  switch (typeFlag) {
    case "component":
      createFromTemplate(fileName, { outputDir, templatesDir: TEMPLATES_COMPONENT_DIR });
      break;
    case "token":
      createFromTemplate(fileName, { outputDir, templatesDir: TEMPLATES_TOKEN_DIR, mkdir: false });
      break;
  }
} catch (error) {
  console.error(error);
}
