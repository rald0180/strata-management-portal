export default async function handler(req, res) {
  // Edge function for listing building notices
  const notices = [
    { title: "Upcoming Maintenance", details: "Elevator maintenance on May 15th" },
    { title: "Committee Meeting", details: "Next meeting scheduled for May 20th" },
    { title: "Pool Closure", details: "Pool will be closed for cleaning on May 18th" }
  ];
  
  res.status(200).json(notices);
}