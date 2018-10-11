# libpeer-js

Libpeer JS implementation. Just basic data structures.

# Streams

Streams contain messages in the following format.

| ver | len | author | sig_type | hash_type | prev_hash | content | sig | hash |

- ver is 4 bytes. Should be zeroes for now.
- len is 4 bytes. Should be length of message or zeroes (till end of stream).
- author eg: "@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519"
- author can be all zeroes
- sig_type is the type of sig for this message. eg: ed25519
- hash_type is the type of hash for this message. eg: sha256
- prev hash eg: %NA/4By9K3L0OmVS2eD8le05uUW94ukDNbX16V3ZApi8=.sha256
- content just bytes
- sig signs prev_hash + content
- sig eg: "EQngCchOejwfWAcZ2Xgr5QR6iquBQVlF++1/ZOLlRJQfyj4TxHk6MHRUKV/o7L35h2zfL1K+Il991JxrxCT+BA==.sig.ed25519"
- hash is hash of prev_hash + content + sig