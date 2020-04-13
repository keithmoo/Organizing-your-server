process.env.NODE_ENV = 'test';
process.env.API_TOKEN = 'test-auth-token';

const supertest = require('supertest');
const { expect } = require('chai');

global.supertest = supertest;
global.expect = expect;