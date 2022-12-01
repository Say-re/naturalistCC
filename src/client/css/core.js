// @flow
import COLORS from '../styled/configs/colors';

const core = `
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
span, h1, h2, h3, h4, h5, h6, p {
	color: ${COLORS.highlight};
	font-family: 'Roboto', sans-serif;
}
p {
	font-size: 14px;
	font-weight: 400;
}
h1 {
	font-size: 2em;
	font-weight: 700;
}
h2 {
	font-size: 1.5em;
	font-weight: 600;
}
h3 {
	font-size: 1.17em;
	font-weight: 500;
}
h4 {
	font-size: 1em;
	font-weight: 500;
}
h5 {
	font-size: 0.83em;

}
h6 {
	font-size: 0.75em;
}
sub {
	margin-left: 2px;
	vertical-align: -25%;
	font-size: 0.5em;
}
`;

export default core;
