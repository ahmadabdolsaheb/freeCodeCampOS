import { cp } from 'fs/promises';
import { warn } from 'logover';
import { join } from 'path';

const ROOT = process.env.INIT_CWD || process.cwd();

copyDotFreeCodeCampToRoot();

async function copyDotFreeCodeCampToRoot() {
  try {
    await cp(
      join(ROOT, 'node_modules/@freecodecamp/freecodecamp-os/.freeCodeCamp'),
      join(ROOT, '.freeCodeCamp'),
      {
        recursive: true,
        force: true
      }
    );
  } catch (e) {
    warn(e);
  }
}
