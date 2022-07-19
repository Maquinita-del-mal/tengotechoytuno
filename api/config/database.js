import mongoose from 'mongoose';
import config from './index.js';

//TODO: eventos on connected connection error reconnected

export default () => {
  mongoose.connect(`${config.database.uri}/${config.database.name}`);
};
