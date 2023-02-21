using VY.Hackathon.Backend.Domain.Dto.Requests;
using VY.Hackathon.Backend.Domain.Poco;

namespace VY.Hackathon.Backend.Business.Contracts;

public interface IAuthenticationService
{
    Task<OperationResult<string>> Register(RegisterRequest request);
    Task<OperationResult<string>> Login(LoginRequest request);
}