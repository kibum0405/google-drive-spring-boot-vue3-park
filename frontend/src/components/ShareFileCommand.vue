<template>
    <v-card outlined>
        <v-card-title>
            ShareFile
        </v-card-title>

        <v-card-text>
            <String label="Filename" :value="value.filename" :editMode="editMode"/>
            <String label="Path" :value="value.path" :editMode="editMode"/>
            <String label="SharedWith" :value="value.sharedWith" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="shareFile"
            >
                ShareFile
            </v-btn>
            
            <v-btn
                    color="primary"
                    text
                    @click="close"
            >
                Close
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
   
    export default {
        name: 'ShareFileCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.filename = '';
            this.value.path = '';
            this.value.sharedWith = '';
        },
        watch: {
        },
        methods: {
            shareFile() {
                this.$emit('shareFile', this.value);
            },
            close() {
                this.$emit('closeDialog');
            },
            change() {
                this.$emit('input', this.value);
            },
        }
    }
</script>

