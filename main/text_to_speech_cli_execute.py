import sys
import re
from gtts import gTTS

def main():
    if len(sys.argv) < 2:
        print("usage: text-to-speech.py 'text_to_convert' [--output output_file]")
        sys.exit(1)

    text_to_convert = sys.argv[1]
    output_file = None
    
    if "--output" in sys.argv:
        output_index = sys.argv.index("--output")
        if len(sys.argv) > output_index + 1:
            output_file = sys.argv[output_index + 1]
        else:
            print("error: missing output file after --output option")
            sys.exit(1)

 

    tts_list = text_to_convert.split()
    if len(tts_list) > 3:
        tts_title = f"{tts_list[0]}_{tts_list[1]}_{tts_list[2]}_file"
    else:
        tts_title = f"{tts_list[0]}_file"
    
    if output_file is None:
        output_file = f'./data/{tts_title}.mp3'
        
    tts = gTTS(text_to_convert)
    
    try:
        tts.save(output_file)
        print(f"text converted and saved as {output_file}")
    except Exception as e:
        print(f"Error: {e}")

main()