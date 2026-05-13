import * as migration_20260513_054500_add_forms_intro_message from './20260513_054500_add_forms_intro_message'

export const migrations = [
  {
    up: migration_20260513_054500_add_forms_intro_message.up,
    down: migration_20260513_054500_add_forms_intro_message.down,
    name: '20260513_054500_add_forms_intro_message',
  },
]
