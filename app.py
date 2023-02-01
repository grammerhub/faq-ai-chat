"""
Get started with our docs, https://docs.slai.io/beam
"""
import beam

app = beam.App(
    name="faq-ai-chat",
    cpu=4,
    memory="16Gi",
)

# Triggers determine how your app is deployed
app.Trigger.RestAPI(inputs={"text": beam.Types.String()}, outputs={"response": beam.Types.String()}, handler="run.py:hello_world")
