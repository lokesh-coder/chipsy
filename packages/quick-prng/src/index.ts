import fnv1a from '@sindresorhus/fnv1a';
import ParkMiller from 'park-miller';

const generate = (seed: string) => {
	return (new ParkMiller(Number(fnv1a(seed)))).floatInRange(0, 1)
}

export default generate;