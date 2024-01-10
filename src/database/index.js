// import{load, loadById} from './read';
// import {save,update} from './write';// we are creating a hub
// export {load,loadById,save,update};// this is the same approach us in the bottom one

export { load, loadById, loadPromoted } from "./read"; // we force import and export at the same time
export { save, update, remove } from "./write";
export { uploadPicture } from "./storage";
