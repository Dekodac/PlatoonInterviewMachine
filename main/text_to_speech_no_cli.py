from gtts import gTTS

def text_to_speech(text_to_convert, output_file=None):
    try:
        tts = gTTS(text_to_convert)
        if output_file is None:
            tts_list = text_to_convert.split()
            if len(tts_list) > 3:
                tts_title = f"{tts_list[0]}_{tts_list[1]}_{tts_list[2]}_file"
            else:
                tts_title = f"{tts_list[0]}_file"
            output_file = f'./data/{tts_title}.mp3'
        tts.save(output_file)
        print(f"text converted and saved as {output_file}")
    except Exception as e:
        print(f"Error: {e}")

