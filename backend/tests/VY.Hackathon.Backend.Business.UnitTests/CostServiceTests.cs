using Moq;
using VY.Hackathon.Backend.Business.Contracts;
using VY.Hackathon.Backend.Domain.Contracts.Repository;
using VY.Hackathon.Backend.Domain.Dto;
using VY.Hackathon.Backend.Domain.Entities;
using VY.Hackathon.Backend.Domain.Poco;

namespace VY.Hackathon.Backend.Business.UnitTests;

public class CostServiceTests
{
    private readonly Mock<ICostRepository> _costRepositoryMock;
    private readonly ICostService _costServiceSut;
    
    public CostServiceTests()
    {
        _costRepositoryMock = new Mock<ICostRepository>();
        _costServiceSut = new CostService(_costRepositoryMock.Object);
    }
    
    [Fact]
    public async Task Test_GetCosts_When_Operation_Fail()
    {
        // arrange
        const string errorMessage = "costs error!";
        var mockedObject = new OperationResult<IEnumerable<Cost>>(new ErrorResult(errorMessage));
        
        _costRepositoryMock.Setup(x => x.GetAll())
            .ReturnsAsync(mockedObject);
        
        // act
        var result = await _costServiceSut.GetCosts();
        
        // assert
        Assert.IsType<OperationResult<IEnumerable<CostDto>>>(result);
        Assert.NotNull(result);
        Assert.False(result.IsSuccessful);
        Assert.NotNull(result.Errors);
        Assert.Single(result.Errors);
        Assert.Equal(errorMessage, result.Errors[0].Message);
    }
    
    [Fact]
    public async Task Test_GetCosts_When_Operation_Success()
    {
        // arrange
        var data = new List<Cost>
        {
            new() { EmployeeType = "Yobal", FullTimeCost = 10.25m, PartTimeCost = 7.5m },
            new() { EmployeeType = "TrianSixx", FullTimeCost = 8.25m, PartTimeCost = 6m }
        };
        
        var mockedObject = new OperationResult<IEnumerable<Cost>>(data);
        
        _costRepositoryMock.Setup(x => x.GetAll())
            .ReturnsAsync(mockedObject);
        
        // act
        var result = await _costServiceSut.GetCosts();
        
        // assert
        Assert.IsType<OperationResult<IEnumerable<CostDto>>>(result);
        Assert.NotNull(result);
        Assert.True(result.IsSuccessful);
        Assert.NotNull(result.Result);
        Assert.Equal(2, result.Result.Count());
    }
}