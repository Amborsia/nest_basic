import {
  Contains,
  Equals,
  IsAlphanumeric,
  IsArray,
  IsBoolean,
  IsCreditCard,
  IsDateString,
  IsDefined,
  IsDivisibleBy,
  IsEmpty,
  IsEnum,
  IsHexColor,
  IsIn,
  IsInt,
  IsLatLong,
  IsNegative,
  IsNotEmpty,
  IsNotIn,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  MaxLength,
  Min,
  NotContains,
  NotEquals,
  registerDecorator,
  Validate,
  validate,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

export class UpdateMovieDto {
  @IsNotEmpty()
  @IsOptional()
  title?: string;
  @IsNotEmpty()
  @IsOptional()
  genre?: string;
  /// null이거나 undefined를 체크
  //   @IsDefined()

  //   @NotEquals('temp')
  //   @IsNotIn(['action', 'fantasy'])
  //   @IsDateString()

  //   @IsNegative()
  //   @Min(100)
  //   @NotContains('temp')
  //   @IsAlphanumeric()
  //   @IsCreditCard()
  //   @IsHexColor()
  //   @MaxLength(10)
  //   @IsUUID()
  //   @IsLatLong()
  //   @Validate(PasswordValidator, {
  //     message: 'temp',
  //   })
}
