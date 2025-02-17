package googledrive.domain;

import com.fasterxml.jackson.databind.ObjectMapper;
import googledrive.FilemanagementApplication;
import googledrive.domain.FileDownloaded;
import googledrive.domain.FileReceived;
import googledrive.domain.FileShared;
import googledrive.domain.FileUploaded;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Map;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "File_table")
@Data
//<<< DDD / Aggregate Root
public class File {

    @Id
    private String id;

    private String name;

    private String path;

    private Integer size;

    private String uploadedBy;

    private Integer downloadedCount;

    private Boolean shared;

    @PostPersist
    public void onPostPersist() {
        FileUploaded fileUploaded = new FileUploaded(this);
        fileUploaded.publishAfterCommit();

        FileDownloaded fileDownloaded = new FileDownloaded(this);
        fileDownloaded.publishAfterCommit();

        FileShared fileShared = new FileShared(this);
        fileShared.publishAfterCommit();

        FileReceived fileReceived = new FileReceived(this);
        fileReceived.publishAfterCommit();
    }

    public static FileRepository repository() {
        FileRepository fileRepository = FilemanagementApplication.applicationContext.getBean(
            FileRepository.class
        );
        return fileRepository;
    }
}
//>>> DDD / Aggregate Root
