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

enum MovieGenre {
  Fantasy = 'fantasy',
  Action = 'action',
}

@ValidatorConstraint({
  async: true,
})
class PasswordValidator implements ValidatorConstraintInterface {
  validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> | boolean {
    return value.length > 4 && value.length < 8;
  }
  defaultMessage?(validationArguments?: ValidationArguments): string {
    return '비밀번호 길이가 올바르지 않습니다 입력된 비밀번호 : ($value)';
  }
}

function IsPasswordValid(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: PasswordValidator,
    });
  };
}

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
  @IsPasswordValid()
  test: string;
}
