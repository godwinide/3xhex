$('.expandable').each((_, elem) => {
	$(elem).on('click', ()=>{
		$(elem).addClass('accordionExpanded').children(0).show()
		history.replaceState(null, null, '#'+elem.id)
	})
})

function expand (id) {
	$(`#${id}`).addClass('accordionExpanded').children(0).show()
	scrollToElem(id)
}

if (window.location.hash !== '') {
	const id = window.location.hash.replace('#','')
	$(`#${id}`).addClass('accordionExpanded').children(0).show()
	setTimeout(() => scrollToElem(id), 200)
}