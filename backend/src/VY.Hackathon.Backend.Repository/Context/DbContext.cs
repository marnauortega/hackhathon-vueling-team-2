using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

using VY.Hackathon.Backend.Domain.Entities;

namespace VY.Hackathon.Backend.Repository;

public class AppDbContext : IdentityDbContext<User>
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }
    
    public DbSet<Cost> Costs { get; set; }
}