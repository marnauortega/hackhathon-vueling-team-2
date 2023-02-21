using VY.Hackathon.Backend.Business;
using VY.Hackathon.Backend.Business.Contracts;
using VY.Hackathon.Backend.Domain.Contracts.Proxies;
using VY.Hackathon.Backend.Domain.Contracts.Repository;
using VY.Hackathon.Backend.Proxy;
using VY.Hackathon.Backend.Repository.Repositories;

namespace VY.Hackathon.Backend.WebApi.IoC;

public static class RegisterDependencies
{
    public static IServiceCollection AddHackathonDependencies(this IServiceCollection serviceCollection, IConfiguration configuration)
    {
        RegisterRepositories(serviceCollection);
        RegisterProxies(serviceCollection, configuration);
        RegisterServices(serviceCollection);
        
        return serviceCollection;
    }

    private static void RegisterServices(IServiceCollection serviceCollection)
    {
        serviceCollection.AddScoped<IHandlingService, HandlingService>();
        serviceCollection.AddScoped<ICostService, CostService>();
        serviceCollection.AddScoped<IAuthenticationService, AuthenticationService>();
    }

    private static void RegisterRepositories(IServiceCollection serviceCollection)
    {
        serviceCollection.AddScoped<ICostRepository, CostRepository>();
    }

    private static void RegisterProxies(IServiceCollection serviceCollection, IConfiguration configuration)
    {
        serviceCollection.AddHttpClient<IHandlingProxy, HandlingProxy>(client =>
        {
            client.BaseAddress = new Uri(configuration.GetValue<string>("Proxies:HandlingProxy:Url"));
            client.Timeout = TimeSpan.Parse(configuration.GetValue<string>("Proxies:HandlingProxy:Timeout"));
        });
    }
}