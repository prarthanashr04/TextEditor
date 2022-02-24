import { Value } from 'slate'

// Create the initial value...
const initialValue = Value.fromJSON({
	document: {
		nodes: [
			{
				object: 'block',
				type: 'paragraph',
				nodes: [
					{
						object: 'text',
						text: 'There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassages of Lorem Ipsum available, but the majority have salteration in some form, by injected humour, or randomised wowhich dont look even slightly believable. If you are going to use a passage. There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassages of Lorem Ipsum available, but the majority have salteration in some form, by injected humour, or randowowhich dont look even slightly believable. If you are going to use a passage.'
					},
				],
			},
		],
	},
})

export default initialValue;