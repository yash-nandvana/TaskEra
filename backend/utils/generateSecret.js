import crypto from 'crypto';

const secret = crypto.randomBytes(32).toString('hex');

console.log('Your new JWT_SECRET is:');
console.log(secret);
console.log('\nCopy this into your .env file as:');
console.log(`JWT_SECRET=${secret}`);