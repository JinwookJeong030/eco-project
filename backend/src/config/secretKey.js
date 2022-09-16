module.exports = {
  secretKey: 'YoUrSeCrEtKeY', // 원하는 시크릿 키
  options: {
    algorithm: 'HS256', // 해싱 알고리즘
    expiresIn: '1m', // 토큰 유효 기간
    issuer: 'issuer', // 발행자
  },
  refreshOptions:{
    algorithm: 'HS256', // 해싱 알고리즘
    expiresIn: '3h', // 토큰 유효 기간
    issuer: 'issuer',
  }
};
