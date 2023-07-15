import styled from "../../css/eventCard.module.css"

export default function EventTag({tag}) {

    return <div className={styled.tag}>
        {tag}
    </div>

}