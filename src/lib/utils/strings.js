import { base } from '$app/paths';

function getLink(label) {
	return base + '/' + label.toLowerCase().replaceAll(' ', '-');
}

export { getLink };
