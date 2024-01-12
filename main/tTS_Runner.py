from text_to_speech_no_cli import text_to_speech
import json

with open("./.data/interview_questions.json", "r") as question_file:
    questions = json.load(question_file)

for question_data in questions:
    question_text = question_data["question"]
    output_file = question_data["output_file"]
    text_to_speech(question_text, output_file)


