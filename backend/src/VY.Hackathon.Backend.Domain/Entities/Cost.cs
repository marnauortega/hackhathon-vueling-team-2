namespace VY.Hackathon.Backend.Domain.Entities;

public class Cost
{
    public Guid Id { get; set; }
    public DateTime? StartDate { get; set; }
    public string EmployeeType { get; set; }
    public decimal FullTimeCost { get; set; }
    public decimal PartTimeCost { get; set; }
}