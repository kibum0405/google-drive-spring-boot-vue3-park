<template>
    <div style="margin: 0 -15px 0 -15px;">
        <v-card-title>
            {{label}}
        </v-card-title>
        <v-card-text v-if="value">
            <div v-if="editMode" style="margin-top:-20px;">
                <v-text-field label="주소" :value="value.address"/>
            </div>
            <div v-else>
                주소 :  {{value.address }}
            </div>
            <div v-if="editMode" style="margin-top:-20px;">
                <v-text-field label="주제" :value="value.subject"/>
            </div>
            <div v-else>
                주제 :  {{value.subject }}
            </div>
            <div v-if="editMode" style="margin-top:-20px;">
                <v-text-field label="내용" :value="value.content"/>
            </div>
            <div v-else>
                내용 :  {{value.content }}
            </div>
        </v-card-text>
    </div>
</template>

<script>
    export default {
        name:"Email",
        props: {
            editMode: Boolean,
            value : Object,
            label : String,
        },
        created(){
            if(!this.value) {
                this.value = {
                    'address': '',
                    'subject': '',
                    'content': '',
                };
            }
        },
        watch: {
            value(newVal) {
                this.$emit('input', newVal);
            },
        },
    }
</script>

<style scoped>
    .address-v-card-title {
        display: contents;
    }
    .address-v-text-field {
        margin-top:5px;
    }
</style>