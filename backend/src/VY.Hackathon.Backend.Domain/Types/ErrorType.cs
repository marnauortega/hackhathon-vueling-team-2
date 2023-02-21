namespace VY.Hackathon.Backend.Domain.Types;

public enum ErrorType
{
    Validation = 400,
    Authorization = 401,
    Forbidden = 403,
    NotFound = 404,
    Unhandled = 500,
    Infrastructure = 600
}