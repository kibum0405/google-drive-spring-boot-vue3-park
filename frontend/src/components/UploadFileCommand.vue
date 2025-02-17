<template>
    <v-card outlined>
        <v-card-title>
            UploadFile
        </v-card-title>

        <v-card-text>
            <String label="Filename" :value="value.filename" :editMode="editMode"/>
            <String label="Path" :value="value.path" :editMode="editMode"/>
            <Number label="Size" :value="value.size" :editMode="editMode"/>
            <String label="UploadedBy" :value="value.uploadedBy" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="uploadFile"
            >
                UploadFile
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
        name: 'UploadFileCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.filename = '';
            this.value.path = '';
            this.value.size = 0;
            this.value.uploadedBy = '';
        },
        watch: {
        },
        methods: {
            uploadFile() {
                this.$emit('uploadFile', this.value);
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

