using VY.Hackathon.Backend.Domain.Types;

namespace VY.Hackathon.Backend.Domain.Poco;

public record ErrorResult
{
    public ErrorResult(string message)
    {
        Message = message;
    }
    
    public ErrorResult(string message, string code)
        : this(message)
    {
        Code = code;
    }
    
    public ErrorResult(string message, string code, ErrorType errorType)
        : this(message, code)
    {
        ErrorType = errorType;
    }
    
    public ErrorResult(string message, ErrorType errorType)
        : this(message)
    {
        ErrorType = errorType;
    }

    public ErrorResult(Exception exception)
    {
        Exception = exception;
        ErrorType = ErrorType.Unhandled;
    }
    
    public ErrorResult(string message, Exception exception)
        : this(message)
    {
        Exception = exception;
    }
    
    public ErrorResult(string message, Exception exception, ErrorType errorType)
        : this(message, exception)
    {
        ErrorType = errorType;
    }

    public string Code { get; } = string.Empty;
    public string Message { get; } = string.Empty;
    public ErrorType ErrorType { get; } = ErrorType.Unhandled;
    public Exception Exception { get; }
}