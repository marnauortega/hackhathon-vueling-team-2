using System.ComponentModel.DataAnnotations;

namespace VY.Hackathon.Backend.Domain.Dto.Requests;

public class LoginRequest
{
    [Required]
    public string? Username { get; set; }
    [Required]
    public string? Password { get; set; }
}