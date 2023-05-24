const TELEGRAM = 'https://api.telegram.org'

const REDIRECT_TO = 'likh0n.github.io/ngl/thanks/'

const ALLOWED_HOST = 'likh0n.github.io'

addEventListener('fetch', event => event.respondWith(handleRequest(event.request)))

const sendMessage = async text => {

	const url = `${TELEGRAM}/bot1958642559:AAG3K7lunqV4cONlLFd811tjKjeEeyot7xM/sendMessage?chat_id=1099021840&text=${text}`
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

		return Response.redirect(`https://${hostname}/${REDIRECT_TO}`, 301)

	} else return new Response('Bad Request', { status: 400 })

}
