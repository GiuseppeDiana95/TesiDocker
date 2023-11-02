import logging

from rasa_sdk import Action
from rasa_sdk.events import AllSlotsReset
from rasa_sdk.events import SlotSet
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.forms import FormAction

logger = logging.getLogger(__name__)

class ActionLogMessage(Action):
    def name(self):
        return "action_log_message"

    def run(self, dispatcher, tracker, domain):
        message = "Questo è un messaggio di log da ActionLogMessage."
        logger.info(message)
        dispatcher.utter_message(text=message)
        return []

class ActionLogCustomMessage(Action):
    def name(self):
        return "action_log_custom_message"

    def run(self, dispatcher, tracker, domain):
        # Puoi personalizzare il messaggio come desideri
        custom_message = "Questo è un messaggio personalizzato da ActionLogCustomMessage."
        logger.info(custom_message)
        dispatcher.utter_message(text=custom_message)
        return []

class ActionLogErrorMessage(Action):
    def name(self):
        return "action_log_error_message"

    def run(self, dispatcher, tracker, domain):
        error_message = "Questo è un messaggio di errore da ActionLogErrorMessage."
        logger.error(error_message)
        dispatcher.utter_message(text=error_message)
        return []

class ActionLogWarningMessage(Action):
    def name(self):
        return "action_log_warning_message"

    def run(self, dispatcher, tracker, domain):
        warning_message = "Questo è un messaggio di avvertimento da ActionLogWarningMessage."
        logger.warning(warning_message)
        dispatcher.utter_message(text=warning_message)
        return []