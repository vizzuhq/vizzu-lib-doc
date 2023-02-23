export default class DocId {
	constructor(id) {
		let ids = id.split('.');
		this.document = Number(ids[0]); 
		this.section = (ids.length > 1) ? Number(ids[1]) : undefined;
		this.subsection = (ids.length > 2) ? Number(ids[2]) : undefined;
	}

	next()
	{
		let res = new DocId(this.getSubSectionId());
		res.subsection++;
		return res;
	}

	prev()
	{
		let res = new DocId(this.getSubSectionId());
		if (res.subsection > 0) res.subsection--;
		return res;
	}

	getSectionId() 
	{
		return this.document + '.' + this.section;
	}

	getSubSectionId() 
	{
		return this.getSectionId() + '.' + this.subsection;
	}

	firstInSection()
	{
		return this.getSectionId() + '.0';
	}

	sameSection(docId)
	{
		return this.getSectionId() === docId.getSectionId();
	}

}