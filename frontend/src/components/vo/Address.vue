<template>
    <div style="margin: 0 -15px 0 -15px;">
        <v-card-title  v-if="editMode">
            {{label}}
        </v-card-title>
        <v-card-text v-if="value">
            <div v-if="editMode" style="margin-top:-20px;">
                <v-text-field label="Country" :value="value.country" />
            </div>
            <div v-if="editMode" style="margin-top:-20px;">
                <v-text-field label="State" :value="value.state" placeholder="OO도"/>
            </div>
            <div v-if="editMode" style="margin-top:-20px;">
                <v-text-field label="City" :value="value.city"/>
            </div>
            <div v-if="editMode" style="margin-top:-20px;">
                <v-text-field label="Street" :value="value.street"/>
            </div>
            <div v-if="editMode" style="margin-top:-20px;">
                <v-text-field label="Zipcode" :value="value.zipcode" />
            </div>

            <div v-if="!editMode">
                <p style="font-family:sans-serif; font-weight:bold; font-size:15px">{{value.country }} / {{value.state }} {{value.city }}  {{value.street }} ({{value.zipcode }})</p>
                <v-divider></v-divider><br>
            </div>
        </v-card-text>
    </div>
</template>

<script>
    export default {
        name:"Address",
        props: {
            editMode: Boolean,
            value : Object,
            label : String,
        },
        data: () => ({
        }),
        created(){
            if(!this.value) {
                this.value = {
                    'street': '',
                    'city': '',
                    'state': '',
                    'country': '',
                    'zipcode': '',
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
</style>
