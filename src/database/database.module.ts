import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SelectedCity } from "src/entity/cities.entity";

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				type: 'postgres',
				host: configService.get<string>('POSTGRES_HOST'),
				port: configService.get<number>('POSTGRES_PORT'),
				username: configService.get<string>('POSTGRES_USER'),
				password: configService.get<string>('POSTGRES_PASSWORD'),
				database: configService.get<string>('POSTGRES_DB'),
				entities: [__dirname + '/../**/*.entity{.ts,.js}', SelectedCity],//'
				// autoLoadEntities: true,
				// migrations: [__dirname + '/../**/*.migration{.ts,.js}'],
				// cli: {
				// 	migrationsDir: "src/migrations"
				// },
        		// migrationsRun: true,
				synchronize: true,
			}),			
		}),		
	]
})
export class DatabaseModule { }