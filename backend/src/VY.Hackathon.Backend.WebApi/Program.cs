using Microsoft.AspNetCore.Identity;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Serilog;
using VY.Hackathon.Backend.Domain.Entities;
using VY.Hackathon.Backend.Repository;
using VY.Hackathon.Backend.Repository.Seeds;
using VY.Hackathon.Backend.WebApi.IoC;
using VY.Hackathon.Backend.WebApi.Middleware;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;

var logger = new LoggerConfiguration()
    .ReadFrom.Configuration(configuration)
    .Enrich.FromLogContext()
    .CreateLogger();

builder.Logging.ClearProviders();
builder.Logging.AddSerilog(logger);


// DbContext
builder.Services.AddDbContext<AppDbContext>(options => 
    options.UseSqlServer(configuration.GetConnectionString("VuelingEmployees")));

// Identity
builder.Services.AddIdentity<User, IdentityRole>()
    .AddRoles<IdentityRole>()
    .AddRoleManager<RoleManager<IdentityRole>>()
    .AddEntityFrameworkStores<AppDbContext>()
    .AddDefaultTokenProviders();

// Adding Authentication
builder.Services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
        })
    .AddJwtBearer(options =>
        {
            options.SaveToken = true;
            options.RequireHttpsMetadata = false;
            options.TokenValidationParameters = new TokenValidationParameters
                                                    {
                                                        ValidateIssuer = true,
                                                        ValidateAudience = true,
                                                        ValidAudience = configuration["JWT:ValidAudience"],
                                                        ValidIssuer = configuration["JWT:ValidIssuer"],
                                                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Secret"]))
                                                    };
        });

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("ElevatedRights", policy =>
        policy.RequireRole(Role.Admin));
    options.AddPolicy("StandardRights", policy =>
        policy.RequireRole(Role.Admin, Role.User));
});

// Add CORS policy
builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowReactDevClient",
            b =>
                {
                    b
                        .AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
    });

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services
    .AddEndpointsApiExplorer()
    .AddHttpClient()
    .AddHackathonDependencies(configuration)
    .AddSwaggerGen(c =>
    {
        c.SwaggerDoc("v1", new OpenApiInfo {Title = "TestWebApi", Version = "v1"});

        c.AddSecurityDefinition(JwtBearerDefaults.AuthenticationScheme,
            new OpenApiSecurityScheme
            {
                Description = "JWT Authorization header using the Bearer scheme.",
                Name = JwtBearerDefaults.AuthenticationScheme, // Authorization
                In = ParameterLocation.Header,
                Type = SecuritySchemeType.Http,
                Scheme = "bearer"
            });
    });

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseMiddleware<ErrorHandlerMiddleware>();

app.UseHttpsRedirection();
app.UseCors("AllowReactDevClient");
app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    await SeedManager.Seed(services);
}

app.Run();