import {json} from "@sveltejs/kit";
import {Configuration, OpenAIApi} from "openai";
import {env} from "$env/dynamic/private";


const configuration = new Configuration({
    apiKey: env.SECRET_API_KEY,
});
const openai = new OpenAIApi(configuration);


export const POST = async ({request}) => {
    const settings = await request.json()
    let arr = Array.apply(null, Array(settings.slide_count))
        .map(function () { return 'content of slide'});
    let prompt =`write me an instagram post with ${settings.slide_count} slides about '${settings.about}' in a ${settings.tone} tone ${settings.emoji===true?'':' with lots of fun emojis '} and each slide must include ${settings.word_range_per_slide} words and include a description with proper hashtags for this post too. response in json format as follows:
{
  "title": "title of post",
  "description": "description of post",
  "slide_len":  ${settings.slide_count},
  "slides": ${JSON.stringify(arr)}
}`
    console.log(prompt)
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo-16k-0613",
        messages: [{role: "user", content: prompt}],
        temperature: 1,
        max_tokens: 16000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    console.log(response.data.choices[0].message.content)
    return json(JSON.parse(response.data.choices[0].message.content))
}
