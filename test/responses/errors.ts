export const ForbiddenException = {
  statusCode: 403,
  message: 'Incorrect user or password',
  error: 'Forbidden',
};

export const PassUndefined = {
  statusCode: 400,
  message: [
    'password should not be null or undefined',
    'password should not be empty',
  ],
  error: 'Bad Request',
};

export const PassEmpty = {
  statusCode: 400,
  message: ['password should not be empty'],
  error: 'Bad Request',
};

export const UserUndefined = {
  statusCode: 400,
  message: ['user should not be null or undefined', 'user should not be empty'],
  error: 'Bad Request',
};

export const UserEmpty = {
  statusCode: 400,
  message: ['user should not be empty'],
  error: 'Bad Request',
};

export const BodyEmpty = {
  statusCode: 400,
  message: [
    'user should not be null or undefined',
    'user should not be empty',
    'password should not be null or undefined',
    'password should not be empty',
  ],
  error: 'Bad Request',
};
