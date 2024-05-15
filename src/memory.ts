
const GetMemory = () => process.memoryUsage().heapUsed / 1024 / 1024;

const mbStart: number = GetMemory();
// console.log(`Start ${Math.round(mbStart * 100) / 100} MB`);

export const CheckMemory = () => {
    // Check how much memory is now allocated.
    const mbNow: number = GetMemory();
    console.log(`Allocated since start ${Math.round((mbNow - mbStart) * 100) / 100} MB`);
};
