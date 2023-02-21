namespace VY.Hackathon.Backend.Domain.Dto;

public record HandlingDto
{
    public DateTime Day { get; set; }
    public ushort Hour { get; set; }
    public string HandlingFunction { get; set; }
    public uint FullTimeEmployees { get; set; }
    public uint PartTimeEmployees { get; set; }
    public uint TotalEmployees { get; set; }
    public decimal FullTimeCost { get; set; }
    public decimal PartTimeCost { get; set; }
    public decimal TotalCost { get; set; }
}