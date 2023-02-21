using System.ComponentModel.DataAnnotations;

namespace VY.Hackathon.Backend.Domain.Dto;

public record CostDto
{
    public DateTime? Day { get; set; }
    [Required]
    public string EmployeeType { get; set; }
    [Required]
    public decimal FullTimeCost { get; set; }
    [Required]
    public decimal PartTimeCost { get; set; }
}