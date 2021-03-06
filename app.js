import dotenv from 'dotenv';
import { resolve } from 'path';
import express from 'express';
import homeRoutes from './src/routes/home.Routes';
import userRoutes from './src/routes/user.Router';
import tokenRoutes from './src/routes/TokenRoutes';
import alunoRoutes from './src/routes/aluno.Routes';
import fotoRoutes from './src/routes/fotoRoutes';
import './src/database';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
