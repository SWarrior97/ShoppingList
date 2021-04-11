<template>
  <v-dialog
    v-model="opened"
    persistent
    max-width="310"
    light
  >
    <v-card>

      <v-card-title class="headline" v-if="fields">
          {{fields.title}}
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="pt-4">
         <div v-for="(field,index) in formFields" :key="index" class="flex flex-column">
             <v-text-field
                v-model="field.model"
                placeholder="Grocery delivery"
                hint="username"
                outlined
                :prepend-icon="field.icon"
            ></v-text-field>
         </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            small
            v-if="fields"
            @click="add()"
          >
            {{fields.btnText}}
          </v-btn>

          <v-btn
            color="info"
            small
            @click="close()"
          >
            Cancel
          </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {EventBus} from '../plugins/eventBus'
export default {
  props: {
  },
  data: () => ({
      opened:false,
      formFields:null,
      fields:null
  }),
  methods: {
    open (formFields,fields) {
        this.opened = true
        this.formFields = formFields
        this.fields = fields
    },
    close(){
        this.opened = false
        this.formFields = null
        this.fields = null
    },
    add(){
        const field =[]

        this.formFields.map( formField => {
            field.push({
                [formField.field]:formField.model
            })
        })
        EventBus.$emit(this.fields.event,field )
        this.opened = false
    }
  },
};
</script>
