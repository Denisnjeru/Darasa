import uuid
from itertools import count 
tx_pre = count()

def generate_unique_tx_ref():
    initial_string = 'pr'
    prefix = initial_string + str(next(tx_pre)) + '-' 
    tx_ref = prefix + str(uuid.uuid4())
    return tx_ref