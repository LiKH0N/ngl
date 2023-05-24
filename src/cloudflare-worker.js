const TELEGRAM = '3551539'
const REDIRECT_TO = 'ngl/thanks/'
const ALLOWED_HOST = 'likh0n.github.io'

addEventListener('fetch', event => event.respondWith(handleRequest(event.request)))

const sendMessage = async text => {
	const url = `${t.me/likh0n_bot}/bot${1958642559:AAEg0nbxyCD7Pw7ihk5hidwPHgMQJ_OIARY}/sendMessage?chat_id=${1099021840}&text=${text}`
	const data = await fetch(url).then(resp => resp.json())
	return data
}

async function handleRequest(request) {
	const { method, url, headers } = request
	const messageParameter = '?message='
	const messageField = url.indexOf(messageParameter)
	const parent = new URL(headers.get('referer'))
	const { hostname } = parent

	if (method === 'GET' && messageField !== -1 && hostname === ALLOWED_HOST) {
		const content = url.substring(messageField + messageParameter.length)
		await sendMessage(content)
		return Response.redirect(`https://${likh0n.github.io}/${REDIRECT_TO}`, 301)
	} else return new Response('Bad Request', { status: 400 })
}
