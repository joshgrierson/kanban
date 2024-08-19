import { Board, PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function transactStatuses(board: Board) {
  return client.$transaction(async (tx) => {
    const statuses = await tx.status.createManyAndReturn({
      data: [
        {
          title: 'Todo',
          boardId: board.id,
        },
        {
          title: 'In Progress',
          boardId: board.id,
        },
        {
          title: 'Done',
          boardId: board.id,
        }
      ]
    });

    await tx.swimlane.createManyAndReturn({
      data: statuses.map((status) => ({
        maxTasks: 10,
        statusId: status.id,
      }))
    });

    return statuses;
  });
}

async function run() {
  const board = await client.board.create({
    data: {
      title: 'My Board',
      maxSwimlanes: 10,
    }
  });

  const statuses = await transactStatuses(board);

  const tasks = await client.task.createManyAndReturn({
    data: [
      {
        title: 'Add button',
        content: 'We simply need to add a button',
        statusId: statuses[0].id,
        boardId: board.id,
      },
      {
        title: 'Update title',
        content: 'We simply need to update the title',
        statusId: statuses[0].id,
        boardId: board.id,
      }
    ]
  });

  console.info('Created board', {
    board,
    statuses,
    tasks
  });
}

run().then(async () => client.$disconnect()).catch(async (error) => {
  console.error('Failed to shutdown prisma connection', error);
  await client.$disconnect();
  process.exit(1);
});