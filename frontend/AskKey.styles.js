export default `
	ul {
		list-style: none;
	}
	ol {
		list-style: none;
		counter-reset: apikey;
	}
	li {
		counter-increment: apikey;
		margin-bottom: 10px;
	}
	li:before {
		float: left;
	    margin-top: 0px;
	    margin-right: 10px;
		content: counter(apikey);
		background: #1183d9;
		border-radius: 100%;
		color: white;
		width: 1.2em;
		text-align: center;
		display: inline-block;
	}

	.askKey li:before {
		margin-top: 4px;
	}
`;