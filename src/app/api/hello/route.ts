export async function POST(req: Request) {
	const body = await req.json();

	console.log("POST /hello", body);

	return new Response(
		JSON.stringify({
			message: `Hello, ${body.name}, this is a public POST endpoint!`,
		}),
		{
			status: 200,
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
		}
	);
}
