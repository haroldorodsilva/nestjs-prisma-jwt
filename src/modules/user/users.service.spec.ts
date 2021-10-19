import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';


const mockUserRepository = () => ({
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
});

describe('UserService', () => {
    let service: UserService;
    let prisma: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                {
                    provide: PrismaService,
                    useFactory: mockUserRepository,
                },
            ],
        }).compile();

        service = module.get<UserService>(UserService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
        expect(prisma).toBeDefined();
    });

    describe('createUer', () => {
        let mockCreateUserDto: CreateUserDto

        // it('should create an user if passwords match', async () => {
        //     service.create.mockResolvedValue('mockUser');
        //     const result = await service.createAdminUser(mockCreateUserDto);

        //     expect(userRepository.createUser).toHaveBeenCalledWith(
        //         mockCreateUserDto,
        //         UserRole.ADMIN,
        //     );
        //     expect(result).toEqual('mockUser');
        // });

        // it('should throw an error if passwords doesnt match', async () => {
        //     mockCreateUserDto.passwordConfirmation = 'wrongPassword';
        //     expect(service.createAdminUser(mockCreateUserDto)).rejects.toThrow(
        //         UnprocessableEntityException,
        //     );
        // });

    })
});