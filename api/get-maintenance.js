export default async function handler(req, res) {
  // Edge function for listing maintenance tasks
  const tasks = [
    { title: "Gardening", details: "Weekly garden maintenance" },
    { title: "Cleaning", details: "Common areas cleaned daily" },
    { title: "Security", details: "Security system check monthly" }
  ];
  
  res.status(200).json(tasks);
}